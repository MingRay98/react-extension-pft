export default {
  containers: {
    align: "center",
    width: "500px",
    height: "auto",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  container: {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "1.5%",
    margin: "1.5%",
    width: "350px",
    position: "relative",
    overflowWrap: 'anywhere'
  },
  input: {
    margin: "2%"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: "auto"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bolder"
  },
  link: {
    lineHeight: 1.5
  },
  drag: {
    position: "absolute",
    top: "10px",
    right: "10px",
    borderRadius: "5px",
    fontSize: "15px",
    cursor: "move",
    width: "max-content"
  },
  button: {
    borderRadius: "5px",
    margin: "1%",
    minWidth: "70px",
    width: "max-content",
    padding: "0.5%",
    lineHeight: "1.5",
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    background: "rgb(255, 0, 149)"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
};
