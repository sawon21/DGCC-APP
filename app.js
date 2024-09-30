let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let recognitionResult = document.getElementById('recognition-result');
let knownFaces = []; // To store registered face data

// Load face-api.js models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models')
]).then(startVideo);

// Start video stream
function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error('Error accessing camera: ', err));
}

// Face registration process
function registerFace() {
  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const department = document.getElementById('department').value;

  if (!name || !roll || !department) {
    alert('Please fill in all fields.');
    return;
  }

  // Detect the face and extract the descriptor
  faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor()
    .then(detection => {
      if (detection) {
        // Store the face descriptor along with the name, roll, and department
        knownFaces.push({
          name: name,
          roll: roll,
          department: department,
          descriptor: detection.descriptor
        });
        alert(`${name} has been registered!`);
        sendDataToDiscord(name, roll, department); // Send data to Discord
      } else {
        alert('No face detected. Please try again.');
      }
    });
}

// Send registration data to Discord
function sendDataToDiscord(name, roll, department) {
  const webhookUrl = 'https://discord.com/api/webhooks/1199416800027349163/7zVriP6clTaGEm9MbHi6lV8oxDbhvN_qnf97zHkSxajr7ITmyfPTrOBkYSk2szVAm_W8';
  
  const requestBody = {
    content: `${name} has registered.`,
    embeds: [{
      title: "Registration Details",
      fields: [
        { name: "Name", value: name, inline: true },
        { name: "Roll", value: roll, inline: true },
        { name: "Department", value: department, inline: true }
      ],
      color: 3447003
    }]
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to send data to Discord');
    }
  })
  .catch(err => console.error('Error sending to Discord:', err));
}

// Start face recognition
function startRecognition() {
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (detections.length > 0) {
      // Compare each detected face with known faces
      detections.forEach(detection => {
        const bestMatch = findBestMatch(detection.descriptor);
        if (bestMatch) {
          recognitionResult.textContent = `Recognized: ${bestMatch.name} (${bestMatch.roll}, ${bestMatch.department})`;
        } else {
          recognitionResult.textContent = 'No match found.';
        }
      });
    } else {
      recognitionResult.textContent = 'No face detected.';
    }
  }, 1000);
}

// Find the best match from registered faces
function findBestMatch(descriptor) {
  let bestMatch = null;
  let smallestDistance = Number.MAX_VALUE;

  knownFaces.forEach(registeredFace => {
    const distance = faceapi.euclideanDistance(descriptor, registeredFace.descriptor);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      bestMatch = registeredFace;
    }
  });

  // Consider a match valid if the distance is below a certain threshold (e.g., 0.6)
  if (smallestDistance < 0.6) {
    return bestMatch;
  } else {
    return null;
  }
}