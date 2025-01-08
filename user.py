student = {
    "name": "John Doe",
    "age": 20,
    "address": {
        "current": {
            "street": "123 Main St",
            "city": "New York",
            "state": "NY",
            "zip": "10001"
        },
        "permanent": {
            "street": "456 Elm St",
            "city": "Albany",
            "state": "NY",
            "zip": "12207"
        }
    }
}

# Simple printing function for student information
def print_student_info(student):
    print(f"Student Information")
    print(f"Name: {student['name']}")
    print(f"Age: {student['age']}")
    print(f"Address:")
    print(f"  Current Address:")
    for key, value in student['address']['current'].items():
        print(f"    {key.capitalize()}: {value}")
    print(f"  Permanent Address:")
    for key, value in student['address']['permanent'].items():
        print(f"    {key.capitalize()}: {value}")

# Call function to print student information
print_student_info(student)
