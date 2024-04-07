import axios from "axios"

export default function Test(){
    return(
        <div>
            <button onClick={async()=>{
                try {
                    const response = await axios.post("http://localhost:4000/register", {
                        username: "zh gzxc",
                        password: "xxcxcc",
                        email: "zvh  @sjdc.com"
                    });
                    console.log(response.data); // Log the response data
                } catch (error) {
                    console.error("Error:", error);
                }
            }}>
                register
            </button>
            
        </div>
    )
}