'use client'

import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "@/context/provider";

import ComponentDashboardMain from "@/frontend/components/layouts/dashboard/main";

import { items_main } from "@/frontend/constant/dashboard"
import { Props_items_dashboard } from "@/frontend/types/props"

import axios from "axios";

export default function Dashboard() {
	const { session: { id, user } } = useContext(Context);

	const [items, setItems] = useState<Props_items_dashboard[]>([]);

	const load_items = useCallback(async () => {
		try {
			const { data } = await axios.get(`/api/role/${id}`);

			switch (data.data) {
				case 'admin':
					setItems(items_main);
					break;
				case 'member':
					const filtered_items = items_main.filter(item => item.url !== '/sessions');
					setItems(filtered_items);
					break;
				default:
					setItems([]);
			}
		} catch (error) {
			setItems([]);
		}
	}, [id]);

	useEffect(() => {
		if (user) {
			load_items();
		}
	}, [user, load_items]);

	return <ComponentDashboardMain items={items} />
}