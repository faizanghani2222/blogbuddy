import { setCredentials } from "../Components/AuthSlice";

async function handleClick(text,createSignIn,toast,dispatch) {
    try {
      let user = await createSignIn(text);
      
      
      if (user?.data) {
        //console.log()
        window.localStorage.setItem("token",JSON.stringify(user.data.user))
        await dispatch(setCredentials(user.data.user))
        toast({
          title: user?.data?.message,
          position: "top-right",
          isClosable: true,
          status:"success"
        });
      } else {
        toast({
          title: user.error.data.message,
          position: "top-right",
          isClosable: true,
          status:"error"
        });
      }
    } catch (e) {
  
      toast({
        title: "Something went wrong in with network ",
        position: "top-right",
        isClosable: true,
        status:"warning"
      });
    }
  }

export default handleClick