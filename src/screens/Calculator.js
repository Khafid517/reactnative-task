import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Center
} from "native-base";


export default function FormNativeBase() {
    const [result, setResult] = React.useState(0)
    const [valueA, setValueA] = React.useState(null)
    const [valueB, setValueB] = React.useState(null)

    const handlePlus = () =>{
        const value = parseInt(valueA)  + parseInt(valueB)
        setResult(value)
    }

    const handleMinus = () =>{
        const value = parseInt(valueA) - parseInt(valueB)
        setResult(value)
    }

    const handleTime = () =>{
        const value = parseInt(valueA) * parseInt(valueB)
        setResult(value)
    }

    const handleDiv = () =>{
        const value = parseFloat(valueA) / parseFloat(valueB)
        setResult(value)
    }

    const handleMod = () =>{
        const value = parseInt(valueA) % parseInt(valueB)
        setResult(value)
    }
    
  return (
    <Box
      safeArea
      bg="secondary.300"
      flex={1}
      p={10}
      w="100%"
      mx="auto"
      justifyContent="center"
    >
      <VStack space={2} mt={5}>
        <FormControl mb={5} >
          <FormControl.Label
            _text={{ color: "danger.700", fontSize: "lg", fontWeight: 600 }}
          >
            Value A
          </FormControl.Label>
          <Input size="2xl" value={valueA} onChangeText={valueA => setValueA(valueA)} />
        </FormControl>
        <FormControl mb={5} >
          <FormControl.Label
            _text={{ color: "danger.700", fontSize: "lg", fontWeight: 600 }}
          >
            Value B
          </FormControl.Label>
          <Input size="2xl" value={valueB} onChangeText={valueB => setValueB(valueB)} />
        </FormControl>
        <HStack space={4} flex={1} justifyContent="center" flexWrap="wrap">
          <Button mb={4} onPress={handlePlus} colorScheme="danger" _text={{ color: "white", fontSize: "40" }} w="90" h="20" >
            +
          </Button>
          <Button mb={4} onPress={handleMinus} colorScheme="danger" _text={{ color: "white", fontSize: "40" }} w="90" h="20" >
            -
          </Button>
          <Button mb={4} onPress={handleTime} colorScheme="danger" _text={{ color: "white", fontSize: "40" }} w="90" h="20" >
            *
          </Button>
          <Button mb={4} onPress={handleDiv} colorScheme="danger" _text={{ color: "white", fontSize: "40" }} w="90" h="20" >
            /
          </Button>
          <Button mb={4} onPress={handleMod} colorScheme="danger" _text={{ color: "white", fontSize: "40" }} w="90" h="20" >
            %
          </Button>
        </HStack>  
        <FormControl mt={10}>
          <FormControl.Label
            _text={{ color: "danger.700", fontSize: "lg", fontWeight: 600 }}
          >
            Result
          </FormControl.Label>
          <Input size="2xl" value={result} _disabled />
        </FormControl>
      </VStack>
    </Box>
  );
}
