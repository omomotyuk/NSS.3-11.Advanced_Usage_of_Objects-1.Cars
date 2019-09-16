/*
//
*/

/*
const doctorsBill = {
    officeName: "", 
    streetAddress: "", 
    doctorName: "", 
    patientName: "", 
    visitDate: "", 
    amountBilled: "", 
    dueDate: ""
}
*/

const newDoctorsBill = ( officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate ) => {
    const bill = {
        officeName: officeName
        streetAddress: streetAddress, 
        doctorName: doctorName, 
        patientName: patientName, 
        visitDate: visitDate, 
        amountBilled: amountBilled, 
        dueDate: dueDate
    }
    return bill
}

const doctorsBill = newDoctorsBill( "Dentist","101 Main St","Bill Doe","Billy Small","2019.02.02","$373.14","2019.03.21" )

const showValue ( doctorsBill ) => {

    for( const value of Object.values( doctorsBill ) ) {
        outputElement.innerHTML += "value"
    }
}



export default doctorsBill