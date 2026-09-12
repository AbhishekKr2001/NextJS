import { connectDB } from "@/config/db";
import Doctor from "@/models/doctor";

export const revalidate = 30;

const DoctorsPage = async () => {
    await connectDB();

    const doctors = await Doctor.find().lean();

    return (
        <div>
            <h1>Doctor List</h1>

            <p>Total Doctors: {doctors.length}</p>

            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor._id.toString()}>
                        Dr. {doctor.first_name} {doctor.last_name} -{" "}
                        {doctor.specialization}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorsPage;