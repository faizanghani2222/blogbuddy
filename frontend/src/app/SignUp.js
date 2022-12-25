async function handleClick(text, createSignUp, toast) {
  try {
    let user = await createSignUp(text);

    if (user?.data) {
      toast({
        title: user?.data?.message,
        position: "top-right",
        isClosable: true,
        status: "success",
      });
    } else {
      toast({
        title: user.error.data.message,
        position: "top-right",
        isClosable: true,
        status: "error",
      });
    }
  } catch (e) {
    toast({
      title: "Something went wrong in with network ",
      position: "top-right",
      isClosable: true,
      status: "warning",
    });
  }
}

export default handleClick;
