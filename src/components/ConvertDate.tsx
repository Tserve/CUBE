import { format, parseISO } from "date-fns"
import ja from "date-fns/locale/js"
import { VFC } from "react"

type Props = {
  dateISO: string
}
export const ConvertDate: VFC<Props> = ({ dateISO }) => (
  <time dateTime={dateISO}>
    {format(parseISO(dateISO), "yyyy年MM月dd日", {
      locale: ja,
    })}
  </time>
)
