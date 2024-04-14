import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormContainer from "../components/FormContainer";
import Input from "../components/Input";
import Button from '../components/Button';
import Error from "../components/Error";
// import EasyButton from "../components/EasyButton";

// Context
import AuthGlobal from "../../context/AuthGlobal";
import { loginUser } from "../../context/Auth.actions";

const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // props.navigation.navigate("TakePhoto");
    // console.log(context.stateUser)
    if (context.stateUser.isAuthenticated === true) {
      props.navigation.navigate("TakePhoto");
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      // console.log(user)
      // console.log(context.dispatch)
      loginUser(user, context.dispatch);
    }
  };

  return (
    <FormContainer title={"Login"}>
      <Input
        placeholder={"Enter Email"}
        name={"email"}
        id={"email"}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={"Enter Password"}
        name={"password"}
        id={"password"}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <Button onPress={() => handleSubmit()}>
          Login
        </Button>
        <Button onPress={() => props.navigation.navigate("StartScreen")}>
          Back
        </Button>
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default Login;
