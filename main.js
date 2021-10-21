
var result = document.getElementById("result");
var comment = document.getElementById("comment");
var msg = document.getElementById("msg");

function calculateBmi(){
    let height = document.getElementById("height").value;
    console.log(height);

    let weight = document.getElementById("weight").value;
    console.log(weight);

    if(height === " " || isNaN(weight))
        result.innerHTML = "provide a valid height!";
    else if(weight === " " || isNaN(height))
        result.innerHTML = "provide a valid height!";
    else
    {
        let bmi = (weight/((height*height)/10000)).toFixed(2);

        if(bmi < 18.6)
        {
            result.innerHTML = `${bmi}`;
            comment.innerHTML = `you are Underweight`;
            msg.innerHTML = `https://www.everydayhealth.com/weight/how-to-gain-healthy-weight.aspx`;
        }
        else if(bmi >= 18.6 && bmi < 24.9)
        {
            result.innerHTML = `${bmi}`;
            comment.innerHTML = `you are Enough Healthy`;
            msg.innerHTML = `https://www.populytics.com/blog/10-habits-maintain-good-health/`;
        }
        else if(bmi > 24.9)
        {
            result.innerHTML = `${bmi}`;
            comment.innerHTML = `you are Overweight`;
            msg.innerHTML = `https://www.healthline.com/nutrition/how-to-lose-weight-as-fast-as-possible`;
        }
    }
}

let button = document.getElementById("btn");
button.addEventListener("click",calculateBmi);