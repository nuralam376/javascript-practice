const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10.00 pm",
    };
    resolve(meetingDetails);
  }
  reject(new Error("Meeting has been already scheduled"));
});

const addToCalender = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return calendar;
};

async function myMeeting() {
  const meetingDetails = await meeting;
  const calendar = await addToCalender(meetingDetails);
  console.log(calendar);
}

myMeeting();
