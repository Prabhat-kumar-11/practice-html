import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getquestion, postquestion } from "../redux/forumredux/action";
import Forumcard from "../components/Forumcard";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const Forum1 = () => {
  const [question, setQuestion] = useState(false);
  const [data, setData] = useState({
    username: "",
    title: "",
    description: "",
    language: "",
    date: "",
    upvotes: 0,
    answers: 0,
  });
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.AuthReducer.user);
  const data2 = useSelector((state) => state.forumReducer.questions);

  useEffect(() => {
    dispatch(getquestion(page));
  }, [page, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postquestion(data));
    setQuestion(false);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <Box p="4">
      <FormControl>
        <FormLabel>Select Language</FormLabel>
        <Select
          name="language"
          value={data.language}
          onChange={handleChange}
          placeholder="Select Language"
        >
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="other">Other</option>
        </Select>
      </FormControl>
      <Button mt="4" colorScheme="teal" onClick={() => setQuestion(!question)}>
        Ask a Question
      </Button>
      {question && (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            value={data.username}
            placeholder="Enter Your Username"
            onChange={handleChange}
            mt="4"
          />
          {/* Other input fields for title, description, date, upvotes, answers */}
          <Button mt="4" colorScheme="blue" type="submit">
            Post Question
          </Button>
        </form>
      )}
      <Box mt="4">
        {/* Display the questions using data2 */}
        {data2.map((question) => (
          <Forumcard
            key={question.id}
            username={question.username}
            title={question.title}
            language={question.language}
            upvotes={question.upvotes}
            answers={question.answers}
            date={question.date}
          />
        ))}
      </Box>
      <Box mt="4">
        <Button
          colorScheme="red"
          mr="2"
          onClick={handlePrev}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span>{page}</span>
        <Button colorScheme="yellow" ml="2" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Forum1;
