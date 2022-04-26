const stringAvatar = (name) => {
  return {
    sx: {
      background: `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`,
      marginRight: "10px",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    marginRight: "10px",
  };
};

export { stringAvatar };
