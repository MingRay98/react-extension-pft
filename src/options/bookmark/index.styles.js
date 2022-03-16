export default {
  containers: {
    align: "center",
    width: "100%",
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
    width: "700px",
    position: "relative",
    overflowWrap: 'anywhere'
  },
  info: {
    margin: '2%',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  input: {
    margin: "2%",
    width: '300px',
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: "auto"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bolder"
  },
  link: {
    lineHeight: 2.5
  },
  drag: {
    position: "absolute",
    top: "10px",
    right: "10px",
    borderRadius: "5px",
    fontSize: "15px",
    cursor: "move",
    width: "fit-content",
  },
  button: {
    borderRadius: "5px",
    margin: "1%",
    padding: '1%',
    minWidth: "70px",
    width: "fit-content",
    lineHeight: "1",
    fontSize: '16px',
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    background: "rgb(255, 0, 149)",
    menu:{
      fontSize: '18px',
      padding: '5%',
      margin: "10%",
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
};
