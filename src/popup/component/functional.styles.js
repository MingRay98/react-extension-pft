export default {
  container: {
    width: "400px",
    position: "relative"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bolder",
    textAlign: 'center',
    marginBottom: '20px',
  },
  buttons: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%"
  },
  getBtn: {
    borderRadius: "5px",
    margin: "1%",
    padding: "1%",
    width: "50px",
    lineHeight: "1.5",
    textAlign: "center",
    cursor: "pointer",
    color: "white",
    background: "rgb(255, 0, 149)",
    flex: 1
  },
  inputContainer: {
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: "row",
    margin: "2%",
    width: '90%',
    fontSize: '16px',
  },
  input: {
    margin: "2%",
    width: '75px',
    flex: 3
  },
  name: {
    flex: 2,
    fontWeight: 'bolder',
  },
};
