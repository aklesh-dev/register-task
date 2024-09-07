interface ReviewDetailsProps {
    formData: {
      firstName: string;
      middleName: string;
      lastName: string;
      phone: string;
      birthDate: string;
      gender: string;
      country: string;
      district: string;
      municipality: string;
      city: string;
      ward: string;
      profilePicture: File | null;
    };
  }
  
  const ReviewDetails = ({ formData }: ReviewDetailsProps) => {
    return (
      <div>
        <h3>Review Your Details</h3>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Middle Name:</strong> {formData.middleName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Birth Date:</strong> {formData.birthDate}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>District:</strong> {formData.district}</p>
        <p><strong>Municipality/Local:</strong> {formData.municipality}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Ward:</strong> {formData.ward}</p>
        <p><strong>Profile Picture:</strong> {formData.profilePicture?.name || 'No Picture Uploaded'}</p>
      </div>
    );
  };
  
  export default ReviewDetails;
  