import axios from "axios"
const BASE_URL=import.meta.env.VITE_BASE_URL

export async function getStudent() {
    try {
        const res = await axios(`${BASE_URL}/allStudent`);

        if(res.status !== 200){
            throw new Error("student not fetched")
        }

        return res.data.students || [];

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function AddStudents(student) {
    try {
        console.log("Sending student:", student);

        const res = await axios.post(
            `${BASE_URL}/add`,
            student
        );

        console.log("Response:", res.data);

        if (res.status !== 201) {
            throw new Error("Student not added");
        }

        return res.data;

    } catch (error) {
        console.error("Backend response:", error.response?.data);
        console.error("Status:", error.response?.status);

        throw new Error(
            error.response?.data?.message || error.message
        );
    }
}
export async function DeleteStudent(id) {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`);

        if(res.status !== 200){
            throw new Error("student not fetched")
        }

        return res.data;
    } catch (error) {
        throw new Error(error.message);
    }

}
export async function UpdateStudent(id, studentData) {
    try {
        const res = await axios.patch(
            `${BASE_URL}/${id}`,
            studentData
        );

        console.log("Update response:", res.data);

        return res.data;

    } catch (error) {
        console.error("UPDATE ERROR:", error.response?.data);
        console.error("STATUS:", error.response?.status);

        throw new Error(
            error.response?.data?.message || error.message
        );
    }
}