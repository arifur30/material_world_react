import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loading from "../../components/common/Loading";
import MainLayout from "../../components/layout/MainLayout";

function CommonMain() {
	// You can use the Loading screen either here or in the Layout, your choice
	const isLoading = useSelector((state) => state.common.IsLoading);

	// This is a preloader to compensate time between ComponentRender and getting data with useEffect.
	// I put a timeout (for presentation purposes) inside useEffect since it was instantaneous in this case (without any fetch request).
	// With this approach, we can't really use react-router <Link>, since that one doesn't cause a re-render.
	const [stateLoading, setStateLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setStateLoading(false);
		}, 2000);
	});

	return (
		<MainLayout>
			{(stateLoading || isLoading) && <Loading />} <Outlet />
		</MainLayout>
	);
}

export default CommonMain;
