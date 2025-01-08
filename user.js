const student = {
    name: "John Doe",
    age: 20,
    address: {
      current: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
      },
      permanent: {
        street: "456 Elm St",
        city: "Albany",
        state: "NY",
        zip: "12207"
      }
    }
  };
  
  const studentDiv = document.createElement("div");
  studentDiv.innerHTML = `
    <h1>Student Information</h1>
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <h2>Address</h2>
    <h3>Current Address</h3>
    <p><strong>Street:</strong> ${student.address.current.street}</p>
    <p><strong>City:</strong> ${student.address.current.city}</p>
    <p><strong>State:</strong> ${student.address.current.state}</p>
    <p><strong>Zip:</strong> ${student.address.current.zip}</p>
    <h3>Permanent Address</h3>
    <p><strong>Street:</strong> ${student.address.permanent.street}</p>
    <p><strong>City:</strong> ${student.address.permanent.city}</p>
    <p><strong>State:</strong> ${student.address.permanent.state}</p>
    <p><strong>Zip:</strong> ${student.address.permanent.zip}</p>
  `;
  
  document.body.appendChild(studentDiv);
  