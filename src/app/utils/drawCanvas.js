import { drawKeypoints, drawSkeleton } from './demo_util';

export default function drawCanvas(canvas, frame, pose, settings) {
  if(!pose.length){
    return;
  }

  const context = canvas.getContext('2d');

  const { width, height } = frame;

  canvas.width = width;
  canvas.height = height;

  context.clearRect(0, 0, width, height);
  
  if(settings.displaySkeleton){
    drawSkeleton(
      pose, 
      settings.threshold, 
      context, 
      settings.skeletonColor, 
      1, 
      settings.keypoints
    );
  }

  if(settings.displayJoints){
    drawKeypoints(
      pose, 
      settings.threshold, 
      context, 
      settings.jointColor, 
      1, 
      settings.keypoints
    );
  }
}
