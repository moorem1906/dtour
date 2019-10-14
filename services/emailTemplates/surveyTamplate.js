//define and return an arrow function
const keys = require('../../config/keys');


module.exports = survey => {
    return `
        < html >
        <body>
            <div style="text-aling: center;">
                <h3>Dtour would like your input!</h3>
                <p>Please answer the following questions:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                </div>
                <div>
                <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                </div>
            </div>
        </body>

 </html >
        `;
};