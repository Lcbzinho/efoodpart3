import { TagItem } from './styles'

type Props = {
  title: string
}
export const Tag = ({ title }: Props) => {
  return (
    <>
      <div>
        <TagItem>{title}</TagItem>
      </div>
    </>
  )
}
