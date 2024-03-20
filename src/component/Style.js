import imagE from "../image/photo-1432821596592-e2c18b78144f.avif";

export const Styles = {
  image: {
    backgroundImage: `url(${imagE})`, //new try
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    justifyContent: "center",
    display: "flex",
  },
  body: {
    backgroundColor: "#dedfc1b3",
    display: "inline-block",
    padding: "20px",
    borderRadius: "5px",
    alignSelf: "center",
    boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  title: {
    // border: "1px solid ",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 20,
    justifyContent: "space-between",
    display: "flex",
  },
  input: {
    border: "1px solid #999",
    borderRadius: "4px",
    marginLeft: 10,
    fontSize: "13px",
    padding: "2px 6px",
  },
  submit: {
    border: "1px solid black",
    fontSize: "12px",
    borderRadius: "4px",
    padding: "5px 10px",
    backgroundColor: "rgb(50 80 80)",
    color: "white",
  },
  submitBox: {
    textAlign: "right",
  },
};
