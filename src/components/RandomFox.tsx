type Props = { image: string };


export const RandomFox = ({ image }: Props): JSX.Element => {

    return (
    <img src={image} className="w-1/2  rounded-md" />
  )
}
