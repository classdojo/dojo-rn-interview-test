import { useQuery } from "@tanstack/react-query";
import React from "react";
import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { entries, groupBy, mapValues, sumBy, values } from "lodash";

type StudentAward = {
  id: string;
  date: string;
  behavior: string;
  weight: number;
  classroom: string;
  student: string;
  studentAvatar: string;
};

export const StudentList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["awards"],
    queryFn: async () => {
      const res = await fetch(
        "https://teach.classdojo.com/api/interviewChallenge"
      );
      const json = (await res.json()) as { awards: StudentAward[] };
      return json.awards;
    },
  });

  if (isLoading) {
    return (
      <View>
        <Text>"Loading</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>"Error</Text>
      </View>
    );
  }

  const awardsByClassroom = groupBy(data, "classroom");

  const sectionedData = entries(awardsByClassroom).map(
    ([classroom, awards]) => {
      const reducedAwards = awards.reduce((acc, award) => {
        const { student, weight } = award;
        const currentWeight = acc[student] ?? 0;
        return { ...acc, [student]: currentWeight + weight };
      }, {} as Record<string, number>);

      return { title: classroom, data: entries(reducedAwards) };
    }
  );

  return (
    <SafeAreaView>
      <SectionList
        sections={sectionedData}
        keyExtractor={([student], index) => `${student}-${index}`}
        renderItem={({ item: [student, total] }) => (
          <View>
            <Text>
              {student}: {total}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </SafeAreaView>
  );
};
