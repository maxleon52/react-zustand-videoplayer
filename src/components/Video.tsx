import ReactPlayer from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next } from "../store/slices/player";

export default function Video() {
  const dispatch = useDispatch();

  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentLesson =
      state.player.courses.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return currentLesson;
  });

  function handlePlayNext() {
    dispatch(next());
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
        onEnded={handlePlayNext}
      />
    </div>
  );
}
