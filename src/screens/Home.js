import * as React from "react";
import { Text, Box, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Home({ navigation }) {
  return (
    <Box
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={40}>
        HOME
      </Text>
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={40}>
        My App
      </Text>

    </Box>
  );
}
