// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}

// Task 02: Awaiting a Call
async function awaitCall() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Task 03: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-url"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
