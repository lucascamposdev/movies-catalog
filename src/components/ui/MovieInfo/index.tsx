// Styles
import { formatAvaliation, formatRuntime, formateDate } from "@utils/format";
import { MediaAvaliation, MediaDate, MediaInfoContainer, MediaRuntime } from "./styles"

// React-Icons
import { MdStar } from "react-icons/md";

type Props = {
  date?: string
  avaliation?: number
  runtime?: number
}

const MovieInfo = ({ date, avaliation, runtime }: Props) => {
  return (
    <MediaInfoContainer>
      {avaliation &&
        <MediaAvaliation>
          <p>{formatAvaliation(avaliation)}</p>
          <MdStar />
        </MediaAvaliation>
      }
      {date &&
        <MediaDate>
          <p>{formateDate(date)}</p>
        </MediaDate>
      }
      {runtime &&
        <MediaRuntime>
          <p>{formatRuntime(runtime)}</p>
        </MediaRuntime>
      }
    </MediaInfoContainer>
  )
}

export default MovieInfo