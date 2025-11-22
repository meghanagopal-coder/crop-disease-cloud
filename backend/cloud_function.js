// 🚀 Cloud Function Starter Code
// Later we will convert this to Firebase or AWS

exports.predictDisease = async (req, res) => {
    res.send({
        status: "ok",
        message: "Cloud backend is connected!",
        prediction: "No prediction yet — ML model will be added soon"
    });
};
