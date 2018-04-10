function FindProxyForURL(url, host) {

	if (dnsDomainIs(host, "youtube.com")) {
		return "PROXY 94.242.58.14:10010";
	}
	return "DIRECT";
}
