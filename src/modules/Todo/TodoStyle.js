import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Slider: {
    flex: 1,
  },

  BtnModel: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  EnterTaskInputContainer: {
    // flexDirection: 'row',
    width: 200,
    // backgroundColor: 'black',
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  EnterTaskInput: {
    flex: 1,
    width: 200,
    marginBottom: 5,
    height: 50,
    color: 'black',
    borderRadius: 30,
    backgroundColor: 'white',
    paddingLeft: 20,
  },

  BtnUpdateTask: {
    height: 50,
    width: 120,

    backgroundColor: 'green',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginRight: 6,
  },
  BtnAdd: {
    height: 50,
    width: 120,
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  indexContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 4,
  },

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 3,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    padding: 10,
  },
  indexBtn: {
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexBtnText: {
    color: 'white',
    paddingHorizontal: 10,
  },
  rowText: {
    flex: 1,
  },
  rowBtn: {
    flexDirection: 'row',
  },
  BtnUpdate: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginRight: 6,
  },
  BtnDelete: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  BtnText: {
    color: 'white',
    fontSize: 15,
  },

  //

  centeredView: {
    position: 'absolute',
    width: 370,
    top: 180,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f56f42',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
