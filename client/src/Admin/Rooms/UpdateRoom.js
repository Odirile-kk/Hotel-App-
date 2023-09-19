import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateRoom, fetchRooms } from '../../Redux/roomSlice'
import { useDispatch, useSelector } from "react-redux";


const AddRooms = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { rooms } = useSelector((state) => state.rooms);

    const room = rooms.find((room) => room._id === id);


    useEffect(() => {
        if (room) {
            setInput({
                title: room.title || "",
                price: room.price || "",
                maxPeople: room.maxPeople || "",
                desc: room.desc || "",
                roomNumber: room.roomNumber || ""
            });
        }
    }, [room]);

    const [input, setInput] = useState({
        title: "",
        price: "",
        maxPeople: "",
        desc: "",
        roomNumber: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(updateRoom({ id, ...input }));
            console.log('posting', input)
        } catch (error) {
            console.error("Error updating room:", error);
        }
    }

    return (
        <div style={{
            padding: '10%',
            width: '60%',
            marginLeft: '20%'
        }}>
        <h3>Update User</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"

                        value={input.title}
                        onChange={e => setInput({ ...input, title: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"

                        value={input.price}
                        onChange={e => setInput({ ...input, price: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Max. people</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"

                        value={input.maxPeople}
                        onChange={e => setInput({ ...input, maxPeople: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"

                        value={input.desc}
                        onChange={e => setInput({ ...input, desc: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Room number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"

                        value={input.roomNumber}
                        onChange={e => setInput({ ...input, roomNumber: e.target.value })}
                    />
                </div>

                <button style={{marginLeft: '40%', padding: '2%', borderRadius: '10px', backgroundColor: 'blue', marginTop: '5%'}}  onClick={handleSubmit} ><Link to={'/'}>Submit</Link></button>
            </form>
        </div>
    );
};

export default AddRooms;