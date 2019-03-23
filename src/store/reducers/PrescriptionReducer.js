const initialState = {
    prescriptions:[
        {prescriptionId:'2019001', patientId:'0001', drugName:'Levofloxacine500', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
        {prescriptionId:'2019001', patientId:'0001', drugName:'Augmentin1000', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
        {prescriptionId:'2019001', patientId:'0001', drugName:'Inibrex200', posology:['1cp at 8h','1cp at 14h', '1cp at 20h'], duration :'5 days'},
    ]
}

const PrescriptionReducer=(state=initialState,action)=>{
    return state
}
    
export default PrescriptionReducer;