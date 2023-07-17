import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player';
interface IProps{
  image:string;
  src:string;
}
const CompCardMusic:React.FC<IProps> = (props:IProps)=>{
  return (<div className="h-80 w-72">
			
  <Image
  src={`./images/${props.image}`}
  width={300}
  height={200}
  alt="Picture of the author"
/>
  <AudioPlayer

src={`./music/${props.src}`}
onPlay={e => console.log("onPlay")}
customAdditionalControls={[]}
showJumpControls={false}
className="bg-black"
// other props here
/>
  
  </div>);
}

export default CompCardMusic;