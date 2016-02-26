/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Router from 'react-routing/src/Router';
import fetch from './core/fetch';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import BusinessPage from './components/BusinessPage';
import GalleryPage from './components/GalleryPage';

const router = new Router(on => {
	on('*', async (state, next) => {
		const component = await next();
		return component && <App context={state.context}>{component}</App>;
	});

	on('/', async () => <HomePage />);

	on('/business', async () => <BusinessPage />);

	on('/gallery', async () => <GalleryPage />);

	/*
	on('/contact', async () => <ContactPage />);

	on('/register', async () => <RegisterPage />);

	on('*', async (state) => {
		const response = await fetch(`/api/content?path=${state.path}`);
		const content = await response.json();
		return content && <ContentPage {...content} />;
	});
	*/
	on('error', (state, error) => state.statusCode === 404 ?
		<App context={state.context} error={error}><NotFoundPage /></App> :
		<App context={state.context} error={error}><ErrorPage /></App>
	);
});

export default router;