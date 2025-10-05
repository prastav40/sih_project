import React, { useState } from 'react';
// Added FiCreditCard for the payment step
import { FiCalendar, FiClock, FiUsers, FiArrowRight, FiCheckCircle, FiDownload, FiCreditCard, FiLoader } from 'react-icons/fi';
import { QRCodeSVG } from 'qrcode.react';

// --- Helper Components ---
const Stepper = ({ currentStep }) => {
    // UPDATED: Added 'Payment' to the steps array
    const steps = ['Date & Time', 'Devotee Details', 'Payment', 'Success'];
    return (
        <div className="flex justify-between items-center mb-12">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center px-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${currentStep > index + 1 || currentStep === index + 1 ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                            {currentStep > index + 1 ? <FiCheckCircle /> : index + 1}
                        </div>
                        <p className={`mt-2 text-sm font-medium ${currentStep >= index + 1 ? 'text-amber-600' : 'text-slate-500'}`}>{step}</p>
                    </div>
                    {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 ${currentStep > index + 1 ? 'bg-amber-500' : 'bg-slate-200'}`}></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

const DarshanBookingPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date('2025-10-05'));
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [devotees, setDevotees] = useState([{ id: 1, name: '', age: '' }]);
    const [bookingId, setBookingId] = useState(null);
    // NEW: State to manage payment process
    const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, verifying, success

    const bookingAmount = devotees.length * 50; // Example: ₹50 per devotee
    const upiId = 'sevashututrust@upi'; // Example UPI ID
    const upiLink = `upi://pay?pa=${upiId}&pn=SevaSetu%20Trust&am=${bookingAmount}.00&cu=INR&tn=DarshanBooking${Date.now()}`;

    const timeSlots = [
        { time: '09:00 AM - 10:00 AM', status: 'Available' },
        { time: '10:00 AM - 11:00 AM', status: 'Filling Fast' },
        { time: '11:00 AM - 12:00 PM', status: 'Full' },
        { time: '04:00 PM - 05:00 PM', status: 'Filling Fast' },
    ];

    const handleAddDevotee = () => setDevotees([...devotees, { id: devotees.length + 1, name: '', age: '' }]);

    const handleDevoteeChange = (index, field, value) => {
        const updatedDevotees = [...devotees];
        updatedDevotees[index][field] = value;
        setDevotees(updatedDevotees);
    };

    const handleNextStep = () => {
        if (currentStep === 1 && !selectedSlot) { alert("Please select a time slot."); return; }
        if (currentStep === 2 && devotees.some(d => !d.name || !d.age)) { alert("Please fill in all devotee details."); return; }
        
        const newBookingId = `SVST-${Date.now()}`;
        setBookingId(newBookingId);
        setCurrentStep(currentStep + 1);
    };
    
    // NEW: Simulate payment verification
    const handlePaymentVerification = () => {
        setPaymentStatus('verifying');
        setTimeout(() => {
            setPaymentStatus('success');
            // Move to the final step after successful "verification"
            setCurrentStep(currentStep + 1); 
        }, 3000); // Simulate a 3-second delay
    };

    const handlePrevStep = () => setCurrentStep(currentStep - 1);
    
    const handleNewBooking = () => {
        setSelectedSlot(null);
        setDevotees([{ id: 1, name: '', age: '' }]);
        setBookingId(null);
        setPaymentStatus('pending');
        setCurrentStep(1);
    };

    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-4">Book Your Special Darshan</h1>
                <p className="text-center text-slate-600 mb-12">Follow the steps below to complete your booking and payment.</p>
                
                <Stepper currentStep={currentStep} />

                {/* Step 1 & 2 remain the same */}
                {currentStep === 1 && (
                    <div>
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center"><FiCalendar className="mr-3 text-amber-500" />Select Date</h2>
                            <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} className="p-3 border border-slate-300 rounded-lg w-full" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center"><FiClock className="mr-3 text-amber-500" />Select Time Slot</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {timeSlots.map(slot => (
                                    <button key={slot.time} onClick={() => slot.status !== 'Full' && setSelectedSlot(slot.time)} disabled={slot.status === 'Full'}
                                        className={`p-4 rounded-lg text-center transition-all duration-200
                                            ${selectedSlot === slot.time ? 'bg-amber-600 text-white ring-2 ring-amber-700' : 
                                            slot.status === 'Full' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 
                                            slot.status === 'Filling Fast' ? 'bg-orange-100 text-orange-800 hover:bg-orange-200' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                                    >
                                        <p className="font-semibold">{slot.time}</p>
                                        <p className="text-xs">{slot.status}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
                {currentStep === 2 && (
                    <div>
                        <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center"><FiUsers className="mr-3 text-amber-500" />Enter Devotee Details</h2>
                        {devotees.map((devotee, index) => (
                             <div key={devotee.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border rounded-lg">
                                 <input type="text" placeholder={`Devotee ${index + 1} Name`} value={devotee.name} onChange={(e) => handleDevoteeChange(index, 'name', e.target.value)} className="p-3 border border-slate-300 rounded-lg"/>
                                 <input type="number" placeholder="Age" value={devotee.age} onChange={(e) => handleDevoteeChange(index, 'age', e.target.value)} className="p-3 border border-slate-300 rounded-lg"/>
                             </div>
                        ))}
                        <button onClick={handleAddDevotee} className="text-amber-600 font-semibold">+ Add Another Devotee</button>
                    </div>
                )}

                {/* NEW: Step 3 - Payment */}
                {currentStep === 3 && (
                     <div>
                        <h2 className="text-xl font-bold text-slate-700 mb-6 flex items-center"><FiCreditCard className="mr-3 text-amber-500"/>Complete Your Payment</h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Left: Booking Summary */}
                            <div className="bg-slate-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
                                <div className="space-y-3">
                                    <p><strong>Date:</strong> {selectedDate.toDateString()}</p>
                                    <p><strong>Time Slot:</strong> {selectedSlot}</p>
                                    <p><strong>Devotees:</strong> {devotees.length}</p>
                                    <hr/>
                                    <p className="text-xl font-bold">Total Amount: ₹{bookingAmount}</p>
                                </div>
                            </div>
                            {/* Right: QR Code Payment */}
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-2">Scan to Pay with UPI</h3>
                                <p className="text-sm text-slate-500 mb-4">Use any UPI app like Google Pay, PhonePe, Paytm</p>
                                <div className="p-4 bg-white rounded-lg shadow-md inline-block">
                                    <QRCodeSVG value={upiLink} size={200} includeMargin={true} />
                                </div>
                                <button onClick={handlePaymentVerification} disabled={paymentStatus === 'verifying'} 
                                    className="w-full mt-6 bg-green-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 disabled:bg-slate-400"
                                >
                                    {paymentStatus === 'verifying' ? <><FiLoader className="animate-spin"/> Verifying Payment...</> : 'I Have Paid, Verify Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Success */}
                {currentStep === 4 && (
                    <div className="text-center">
                        <FiCheckCircle className="text-6xl text-green-500 mx-auto mb-4"/>
                        <h2 className="text-2xl font-bold text-slate-800">Payment Successful!</h2>
                        <p className="text-slate-600 mt-2">Your Darshan is confirmed. Please show the QR code on your ticket at the entry gate.</p>
                        <div className="mt-8 bg-slate-50 p-6 rounded-lg border-dashed border-2">
                             <h3 className="font-bold text-center mb-4">E-Ticket</h3>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                               <QRCodeSVG value={JSON.stringify({ bookingId, date: selectedDate.toDateString(), slot: selectedSlot })} size={128} />
                                <div className="text-left">
                                    <p><strong>Booking ID:</strong> {bookingId}</p>
                                    <p><strong>Date:</strong> {selectedDate.toDateString()}</p>
                                    <p><strong>Time Slot:</strong> {selectedSlot}</p>
                                </div>
                            </div>
                        </div>
                         <div className="mt-8 flex justify-center gap-4">
                            <button className="bg-slate-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2"><FiDownload/> Download Ticket</button>
                            <button onClick={handleNewBooking} className="bg-amber-500 text-white font-bold px-6 py-3 rounded-lg">Book Another Darshan</button>
                        </div>
                    </div>
                )}
                
                {/* Navigation Buttons */}
                {currentStep < 3 && (
                    <div className="flex justify-between mt-12">
                        <button onClick={handlePrevStep} disabled={currentStep === 1} className="bg-slate-300 text-slate-700 font-bold px-6 py-3 rounded-lg disabled:opacity-50">Back</button>
                        <button onClick={handleNextStep} className="bg-amber-500 text-white font-bold px-6 py-3 rounded-lg flex items-center">
                           Next <FiArrowRight className="ml-2"/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DarshanBookingPage;