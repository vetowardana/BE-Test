/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  Object.entries(data).forEach(([k, v]) => {
    if (v && typeof v === 'object') {
      result(v);
    }
    if (v && typeof v === 'object' && !Object.keys(v).length || v === null || v === undefined) {
      if (Array.isArray(data)) {
        data.splice(k, 1);
      } else {
        delete data[k];
      }
    }
  });
  return data;
}

console.log(result(data));
