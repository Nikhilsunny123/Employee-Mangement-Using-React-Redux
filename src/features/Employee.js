import { createSlice } from "@reduxjs/toolkit";


import { EmpData } from "./Employeelist";
 

export const empSlice=createSlice({
    name:"employees",
    initialState: { value: EmpData,selectedEmployee:null,edit:false},
    reducers:{
        addEmployee:(state=[],action)=>{
        state.value.push(action.payload);
        },
       
        selectEmployee:(state=null,action)=>{
          return {...state, selectedEmployee: action.payload}
          },
          editForm:(state,action)=>{
            state.edit=(action.payload);
          },
        deleteEmployee: (state, action) => {
            state.value = state.value.filter((employee) => employee.id !== action.payload.id);
          },

          updateEmployee: (state, action) => {
            state.value.map((employee) => {
              if (employee.id === action.payload.id) {
                employee.employeeName = action.payload.employeeName;
                employee.employeeEmail=action.payload.employeeEmail;
                employee.employeeImage=action.payload.employeeImage;
            }
        }
        );
      },
    },
    

  });

  export const { addEmployee,selectEmployee, deleteEmployee, updateEmployee ,editForm} = empSlice.actions;
export default empSlice.reducer;
