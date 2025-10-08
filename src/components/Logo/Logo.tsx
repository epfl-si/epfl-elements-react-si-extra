interface LogoProps {
	logoUrl?: string;
	alt?: string;
	target?: '_blanc' | '_top';
}

/**
 * The EPFL logo.
 * By default, the logo link redirects to the EPFL website, but it’s possible to configure the following:
 * - the placeholder comment
 * - the URL to open when the logo is clicked
 * - whether the page opens in the current tab or in a new tab
 */
export const Logo = ({
	logoUrl,
	alt,
	target
}: LogoProps) => {
	const imageUrl = `https://www.epfl.ch/campus/services/website//wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg`

	return (
		<a className='logo' href={logoUrl ?? 'https://www.epfl.ch/'} target={target ?? '_top'}>
			<img
				src={`${imageUrl}?refresh=now`}
				alt={alt ?? 'EPFL, École polytechnique fédérale de Lausanne'}
				className='img-fluid'
			/>
		</a>
	)
};
