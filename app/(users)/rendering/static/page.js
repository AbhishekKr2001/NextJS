import { connectDB } from "@/config/db";
import Doctor from "@/models/doctor";

export const revalidate = 30;
// to make it refetch data after 30 seconds 
// as this is static page so once it is build 
// it doesn't refetches data so to overcome that 
// we use ISR(Incremental Static Regeneration)

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