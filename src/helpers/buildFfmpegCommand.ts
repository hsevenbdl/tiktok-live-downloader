import {
  fileNameOutput,
  ffmpegCommandMP4,
  ffmpegCommandMKV,
  ffmpegCommandLive,
} from '../utils/constants'

export default function buildFfmpegCommand(
  url: string,
  title: string,
  username: string,
  fileName: string,
  format: string,
  isFlv: boolean
): string {
  if (isFlv && format === 'live') {
    return ffmpegCommandLive(url,  fileName)
  }
  
  if (format === 'live') {
    return ffmpegCommandLive(url,  fileName) // Gunakan ffmpegCommandLive
  }

  
  if (isFlv) {
    const newFileName: string = fileNameOutput(fileName, username, 'mkv')
    return ffmpegCommandMKV(url, newFileName)
  }

  return format === 'mp4'
    ? ffmpegCommandMP4(url, title, username, fileName)
    : ffmpegCommandMKV(url, fileName)
}
