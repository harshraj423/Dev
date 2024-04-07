

  export default function VideoPlayer({title, video}) {
    return <div>
      <div className="font-bold text-lg flex justify-center">
        {title}
      </div>
      <video height="500" weight="750" src={video} controls>
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  }
  