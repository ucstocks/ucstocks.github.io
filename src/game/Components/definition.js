let definitions = {
    "cost of living":"The cost of living is the amount a person needs to spend to cover basic expenses such as housing, food, taxes, and healthcare in a particular place.",
    "inflation":"Inflation is a decrease in the purchasing power of money, reflected in a general increase in the prices of goods and services in an economy.",
    "gross pay":"Gross pay is what employees earn before taxes, benefits and other payroll deductions are withheld from their wages."
}
function Definition(props){
    
    return(
        <b class="hoverable" data-bs-toggle="tooltip" data-toggle="tooltip" data-placement="top" title={definitions[props.text.toLowerCase()]}>{props.text}</b>
    );
}
export default Definition;