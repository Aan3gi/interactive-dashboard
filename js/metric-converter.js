function metricConverter(value, conversion) {
    var result;

    if (conversion === "inch to centimeter") {
        result = value * 2.54;
        return result;
    } else if (conversion === "foot to centimeter") {
        result = value * 30.48;
        return result;
    } else if (conversion === "yard to meter") {
        result = value * 0.91;
        return result;
    } else if (conversion === "mile to kilometer") {
        result = value * 1.61;
        return result;
    } else if (conversion === "centimeter to inch") {
        result = value * 0.39;
        return result;
    } else if (conversion === "centimeter to foot") {
        result = value * 0.0328;
        return result;
    } else if (conversion === "meter to yard") {
        result = value * 1.09;
        return result;
    } else if (conversion === "kilometer to mile") {
        result = value * 0.62;
        return result;
    } else {
        return "Invalid conversion";
    }
}

document.getElementById("convert-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let input_value = document.getElementById("metric-value").value;
    input_value = parseFloat(input_value);

    let conversion_select = document.getElementById("conversion-type");
    let conversion_index = conversion_select.selectedIndex;

    let options = conversion_select.getElementsByTagName("option");
    let conversion = options[conversion_index].text;

    let result = metricConverter(input_value, conversion);

    document.getElementById("conversion-result").innerHTML =
        input_value + " " + conversion + " = " + result.toFixed(2);
});