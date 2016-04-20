EditorJSLoader.ready(function(Editor) {
	var host = location.protocol + '//' + location.host;
	var editInfoForm = document.forms.ttEditEntry;
	var contentWidth = parseInt(editInfoForm.contentWidth.value, 10);
	var imageDefaultSign = encodeURIComponent(host);
	new Editor({
		txHost: host,
		txPath: '/daumeditor/',
		txService: 'tistory',
		txFarmCode: 'tistory',
		canvas: {
			insertbr: (editInfoForm.autoBr.value == "1"),
			selectedMode: (editInfoForm.editorMode.value == "1") ? "html" : "source",
			customCssText: 'blockquote,blockquote.tx-quote-tistory{margin:10px; border:1px dashed #f00; padding:10px;}body img.txc-movie{width:' + contentWidth + ' !important;height:auto !important}',
			pMarginZero: false,
			styles: {
				marginTop: "25px"
			}
		},
		size: {
			fixed: true,
			contentWidth: contentWidth
		},
		maxwidth: contentWidth,
		sidebar: {
			capacity: {
				hideCapacityInPopup: true,
				maximum: 1048576 * 1024 * 1024
			},
			attacher: {
				image: {
					imagemaxwidth: contentWidth,
					param: "defaultSign=" + imageDefaultSign + "&maxDefSize=#maxwidth&useExifMenu=false&originalCheck=true&originalCheckBox=true"
				},
				file: {
					enableCloudImport: false,
					popPageUrl: "/script/DaumEditor/pages/file.html",
					upSource: editInfoForm.blogId.value,
					useCC: true,
					checksize: false
				},
				movie: {
					flashPageUrl: "/admin/entry/post/attach.php?type=movie"
				},
				map: {
					iframeUrl: "/admin/entry/post/proxyPlusmapViewer.php",
					pageUrl: "http://attach.map.daum.net/?mode=F&appendType=S&target=" + encodeURIComponent(host + "/admin/entry/post/attach.php?type=map"),
					mapWidthMargin: 0
				},
				jukebox: {
					popPageUrl: "/admin/entry/post/attach.php?type=jukebox",
					features: {
						left:250,
						top:65,
						width: 400,
						height: 400,
						resizable: "yes"
					}
				},
				slideshow: {
					popPageUrl: "/admin/entry/post/attach.php?type=slideshow",
					features: {
						left:250,
						top:65,
						width: 400,
						height: 345,
						resizable: "yes"
					}
				},
				bgm: {
					popPageUrl: "/admin/entry/post/attach.php?type=bgm"
				}
			},
			embeder: {
				media: {
					popPageUrl: "/script/DaumEditor/pages/multimedia.html",
					allowNetworkingFilter: false
				},
				formula: {
					popPageUrl: "/script/DaumEditor/pages/Pencil.html",
					authType: "tistory",
					/* authUrl 파일명 getDaumCookie.php 변경시 에디터 담당부서(FT기술팀)에 문의 후 변경해주세요. */
					authUrl: "/admin/entry/post/getDaumCookie.php"
				},
				mypeoplesticker: {
					proxyPath: "/admin/entry/post/attachMypeopleSticker.php"
				}
			}
		},
		adaptor:{
			pastel: {
				popPageUrl: "/script/DaumEditor/pages/PastelWrapper.html?swf_key=2012071201",
				pastelCode: "TistoryPastelPep",
				authType: "tistory",
				authUrl: "/admin/entry/post/getDaumCookie.php"
			},
			coca: {
				url: "http://editor.daum.net/coca_service/1.1.15/coca.swf",
				cocaCode:"TistoryNewCoca",
				authType: "tistory",
				authUrl: "/admin/entry/post/getDaumCookie.php"
			},
			fanta: {
				authUrl: "/admin/entry/post/getDaumCookie.php",
				//authInterval 마다 authUrl 를 통해 daum_cookie 를 다시 발급.
				authInterval: 10 * 60 * 1000
			}
		},
		toolbar: {
			fontfamily: {
				options: [
					{ label: ' 굴림 (<span class="tx-txt">가나다라</span>)', title: '굴림', data: 'Gulim,굴림,AppleGothic,sans-serif', klass: 'tx-gulim' },
					{ label: ' 바탕 (<span class="tx-txt">가나다라</span>)', title: '바탕', data: 'Batang,바탕', klass: 'tx-batang' },
					{ label: ' 돋움 (<span class="tx-txt">가나다라</span>)', title: '돋움', data: 'Dotum,돋움', klass: 'tx-dotum' },
					{ label: ' 궁서 (<span class="tx-txt">가나다라</span>)', title: '궁서', data: 'Gungsuh,궁서', klass: 'tx-gungseo' },
					{ label: ' Arial (<span class="tx-txt">abcde</span>)', title: 'Arial', data: 'Arial', klass: 'tx-arial' },
					{ label: ' Verdana (<span class="tx-txt">abcde</span>)', title: 'Verdana', data: 'Verdana', klass: 'tx-verdana' },
					{ label: ' Arial Black (<span class="tx-txt">abcde</span>)', title: 'Arial Black', data: 'Arial Black', klass: 'tx-arial-black' },
					{ label: ' Book Antiqua (<span class="tx-txt">abcde</span>)', title: 'Book Antiqua', data: 'Book Antiqua', klass: 'tx-book-antiqua' },
					{ label: ' Comic Sans MS (<span class="tx-txt">abcde</span>)', title: 'Comic Sans MS', data: 'Comic Sans MS', klass: 'tx-comic-sans-ms' },
					{ label: ' Courier New (<span class="tx-txt">abcde</span>)', title: 'Courier New', data: 'Courier New', klass: 'tx-courier-new' },
					{ label: ' Georgia (<span class="tx-txt">abcde</span>)', title: 'Georgia', data: 'Georgia', klass: 'tx-georgia' },
					{ label: ' Helvetica (<span class="tx-txt">abcde</span>)', title: 'Helvetica', data: 'Helvetica', klass: 'tx-helvetica' },
					{ label: ' Impact (<span class="tx-txt">abcde</span>)', title: 'Impact', data: 'Impact', klass: 'tx-impact' },
					{ label: ' Symbol (<span class="tx-txt">abcde</span>)', title: 'Symbol', data: 'Symbol', klass: 'tx-symbol' },
					{ label: ' Tahoma (<span class="tx-txt">abcde</span>)', title: 'Tahoma', data: 'Tahoma', klass: 'tx-tahoma' },
					{ label: ' Terminal (<span class="tx-txt">abcde</span>)', title: 'Terminal', data: 'Terminal', klass: 'tx-terminal' },
					{ label: ' Times New Roman (<span class="tx-txt">abcde</span>)', title: 'Times New Roman', data: 'Times New Roman', klass: 'tx-times-new-roman' },
					{ label: ' Trebuchet MS (<span class="tx-txt">abcde</span>)', title: 'Trebuchet MS', data: 'Trebuchet MS', klass: 'tx-trebuchet-ms' },
					{ label: ' Webdings (<span class="tx-txt">abcde</span>)', title: 'Webdings', data: 'Webdings', klass: 'tx-webdings' },
					{ label: ' Wingdings (<span class="tx-txt">abcde</span>)', title: 'Wingdings', data: 'Wingdings', klass: 'tx-wingdings' }
				]
			},
			quote: {
				cols: 2,
				rows: 1,
				options: [
					{ type: 'image', data: 'tx-quote-tistory', image: '#iconpath/quote/citation04.gif?v=2' },
					{ type: 'cancel', data: 'tx-quote6', image: '#iconpath/quote/citation06.gif?v=2' }
				]
			},
			specialchar: {
				left: -175
			},
			layout: {
				left: -155
			}
		},
		save: {
			autosave: {
				term: 30000,
				avkey: editInfoForm.avkey.value,
				avMaxCnt: 10,
				linkSelector: ".btn_tempsave",
				countFormat: "{count}",
				countSelector: ".btn_tempsave strong",
				notiSelector: ".btn_tempsave #nothing"
			}
		},
		initializedId: "",
		wrapper: "tx_trex_container" + "",
		form: "tx_editor_form" + "",
		ttml: {
			propertyFilePath: "/admin/entry/post/filePreview.php?filename="
		}
	});
});