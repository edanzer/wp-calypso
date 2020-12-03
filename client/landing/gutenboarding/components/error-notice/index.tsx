/**
 * External dependencies
 */
import React from 'react';
import { Notice } from '@wordpress/components';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

type Props = Omit< Notice.Props, 'status' >;

// Onboarding specific error notice that just applies onboarding styling to
// the Gutenberg <Notice> component.
const ErrorNotice: React.FC< Props > = ( { children, className, ...rest } ) => (
	<Notice
		className={ classNames( 'onboarding-error-notice', className ) }
		status="error"
		{ ...rest }
	>
		{ children }
	</Notice>
);

export default ErrorNotice;
