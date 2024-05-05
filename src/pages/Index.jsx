import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [story, setStory] = useState("");
  const [userInput, setUserInput] = useState("");

  // Example dictionary of words
  const dictionary = ["exciting", "adventure", "suddenly", "mysterious", "discovered", "whispered", "gigantic", "laughed", "ancient", "golden"];

  // Function to handle user input
  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // Function to add user's word to the story
  const addUserWord = () => {
    if (userInput.trim()) {
      const newStory = `${story} ${userInput.trim()}`;
      setStory(newStory);
      setUserInput("");
      addWebsiteWord(newStory);
    }
  };

  // Function to randomly add a word from the dictionary
  const addWebsiteWord = (currentStory) => {
    const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    const newStory = `${currentStory} ${randomWord}`;
    setStory(newStory);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb={4}>
          Let's Build a Story Together!
        </Text>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Text>{story || "Start the story..."}</Text>
        </Box>
        <Input placeholder="Add your word..." value={userInput} onChange={handleUserInput} />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addUserWord} disabled={!userInput.trim()}>
          Add Word
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
