var naam = prompt("Wat is je naam")
	alert("Je zit op de bank tv tekijken")
	alert("Je hoort de telefoon gaan")
	alert("Ringgg, Ringgg")
	alert("Je staat op om optenemen")
	alert("Vreemdeling: Hallo met john is dit " + naam)
	alert("Jij: Uhhm ja??")
	alert("Jij: Hoe heb je dit nummer")
	alert("John: Ik heb dit nummer van je tante, dat is mijn moeder")
	alert("Jij: Maar ik spreek al jaren niet meer met haar")
	alert("John: Maakt niet uit, ik heb een vraagje voor je")
	alert("Jij: Uhhm, okey? vraag maar")
	alert("John: Ik heb een kaart gevonden met een verlaten kasteel vlak bij jou huis, volgens deze kaart is er een schat vol met goud.")
	var antwoord1 = prompt ("John: Mijn vraag aan jou is: Ga je mee of niet (antwoord met Ja/Nee)")

	if (antwoord1 == "nee"){
		alert("Je gaat weer terug naar de bank tv kijken")
		alert("reload de site om opnieuw te beginnen")
	}
	else{
		alert("Jij: Ja is goed, heb toch niks tedoen")
		alert("Je gaat naar de garage en je moet kiezen")
		var antwoord2 = prompt ("Ga je met de auto of met de motor")
	}
		if (antwoord2 == "auto"){
			alert("Je start de auto op en je rijdt weg")
			alert("15 minuten later sta je in de file")
			alert("LATER")
			alert("John: Je bent telaat!")
			alert("Jij: Weet ik. er was file")
			alert("John: Okey, dan...")
			alert("John: Ik heb een kaart gevonde op zolder over een schat die hier verstopt is")
			alert("John: Maar de vraag is hoe gaan we naar binnen")
			alert("John: Ik heb rondgekeken en 2 ingangen gevonden")
			alert("John: De 1e ingang is de hoofdingang, ik heb camera's gezien maar ik weet niet of ze het nog doen")
			alert("John: De 2e ingang is de kelder, ik kon niet goed naar binnen kijken want het was best donker")
			var antwoord3 = prompt ("Jij mag kieze gaan we via de hoofdingang of via de kelder?")
		
			if (antwoord3 == "hoofdingang"){
				alert("Je gaat naar binnen")
				alert("Je kijkt rond en ziet dat de camera's gelukkig uit staan") 
				alert("Je loopt verder")
				alert("je ziet een paar opvallende stenen")
				alert("Je denkt erover na om de stenen uit teproberen net als in films")
				var antwoord4 = prompt("Ga je ze uitproberen Ja/Nee")

				if (antwoord4 == "ja"){
					alert("Je probeerd de stenen uit en John kijkt je raar aan")
					alert("Bij 1 van de stenen die je hebt uitgeprobeerd valt op de grond")
					alert("Er staan cijfers op een muur achter de plek waar de gevallen steen stond")
					alert("9742")
					alert("Je roept John")
					alert("Jij: Kijk er staan cijfers op de muur hier")
					alert("John: Wat zou dat moeten betekenen dan")
					alert("John: Schrijf het in je telefoon voor later. Misschien hebben we het nog nodig")
					alert("Je loopt verder")
					alert("Je komt 3 deuren tegen met plaatjes erop")
					alert("Op de 1e deur staat een plaatje van metalen spikes")
					alert("Op de 2e deur staat een plaatje van een valstrik")
					alert("op de 3e deur staat een plaatje van een leeuw")
					alert("John: Volgens de kaart komen alle gangen uit bij de zelfde gang waar we moeten zijn")
					alert("John: Kies jij welke gang we nemen")
					var antwoord5 = prompt("Welke deur neem je")

					if (antwoord5 == "1"){
						alert("Je loopt naar binnen")
						alert("2 grote metalen spikes vallen naar beneden en 1 raakt jou")
						alert("GAME OVER")
						alert("Reload de site om te restarte")
					}
					else if (antwoord5 == "2"){
						alert("Je loopt naar binnen")
						alert("Je loopt door de kamer en je stapt op een steen die ontploft")
						alert("GAME OVER")
						alert("Reload de site om te restarte")								
					}
					else if (antwoord5 == "3"){
						alert("Je loopt naar binnen")
						alert("Je loopt door de gang en je ziet om je heen allemaal dode leeuwen")
						alert("John: Deze leeuwen zijn hier al zolang zonder eten die zijn waarschijnlijk van de honger gestorven")
						alert("Je bent aan het einde van de kamer en gaat door de deur")
						alert("Je loopt in een andere gang met voor je een kluis met een code slot")
						alert("John: Een code? Ik heb geen code jij?")
						alert("Jij: Nee, zullen we maar wat proberen dan?")
						var antwoord6 = prompt("Vul een code in")

						if (antwoord6 == "9742"){
							alert("De deur gaat open en overal ligt goud");
							alert("John: We zijn rijk!")
							alert("John: We hoeven nooit meer te werken!")
							alert("John: Laten we dit vieren in de kroeg")
							alert("LATER")
							alert("Er staat een uitsmijter voor de deur")
							var antwoord7 = prompt ("Uitsmijter: Hoe oud ben je, en aub je id kaart laten zien")

							if (antwoord7 <=17){
								alert("Uitsmijter: Je mag er niet in. kom maar terug als je oud genoeg bent")
							}
							else{
								alert("Uitsmijter: Je mag naar binnen, fijne avond nog")
							}
						}
						else{
							alert("Er gebeurd niks en het schermpje knipperd rood")
							alert("Onder je gaat een luik open en je valt er doorheen")
							alert("Je valt tepletter op een een bed vol met metalen pinnen")
							alert("GAME OVER")
							alert("Reload de site om te restarte")
						}
					}
				}	
				else{
					alert("Je loopt verder")
					alert("Je komt 3 deuren tegen met plaatjes erop")
					alert("Op de 1e deur staat een plaatje van metalen spikes")
					alert("Op de 2e deur staat een plaatje van een valstrik")
					alert("Op de 3e deur staat een plaatje van een leeuw")
					alert("John: Volgens de kaart komen alle gangen uit bij de zelfde gang waar we moeten zijn")
					alert("John: Kies jij welke gang we nemen")
					var antwoord5 = prompt("Welke deur neem je")

					if (antwoord5 == "1"){
						alert("Je loopt naar binnen")
						alert("2 grote metalen spikes vallen naar beneden en 1 raakt jou")
						alert("GAME OVER")
						alert("Reload de site om te restarte")
					}
					else if (antwoord5 == "2"){
						alert("Je loopt naar binnen")
						alert("Je loopt door de kamer en je stapt op een steen die ontploft")
						alert("GAME OVER")
						alert("Reload de site om te restarte")								
					}
					else if (antwoord5 == "3"){
						alert("Je loopt naar binnen")
						alert("Je loopt door de gang en je ziet om je heen allemaal dode leeuwen")
						alert("John: Deze leeuwen zijn hier al zolang zonder eten die zijn waarschijnlijk van de honger gestorven")
						alert("Je bent aan het einde van de kamer en gaat door de deur")
						alert("Je loopt in een andere gang met voor je een kluis met een code slot")
						alert("John: Een code? Ik heb geen code jij?")
						alert("Jij: Nee, zullen we maar wat proberen dan?")
						var antwoord6 = prompt("Vul een code in")

						if (antwoord6 == "9742"){
							alert("De deur gaat open en overal ligt goud")
							alert("John: We zijn rijk!")
							alert("John: We hoeven nooit meer te werken!")
							alert("John: Laten we dit vieren in de kroeg")
							alert("LATER")
							alert("Er staat een uitsmijter voor de deur")
							var antwoord7 = prompt ("Uitsmijter: Hoe oud ben je, en aub je id kaart laten zien")

							if (antwoord7 <=17){
								alert("Uitsmijter: Je mag er niet in. kom maar terug als je oud genoeg bent")
							}
							else{
								alert("Uitsmijter: Je mag naar binnen, fijne avond nog")
							}
						}
						else{
							alert("Er gebeurd niks en het schermpje knipperd rood")
							alert("Onder je gaat een luik open en je valt er doorheen")
							alert("Je valt tepletter op een een bed vol met metalen pinnen")
							alert("GAME OVER")
							alert("Reload de site om te restarte")
						} 				
					}
				}
			}
			else{
				alert("Je gaat naar binnen via de kelder")
				alert("Er ligt een houde bodem in de kelder")
				alert("Je loopt over de houte bodem en als je in het midden bent vallen jij en john samen naar beneden")
				alert("op de bodem liggen metalen spikes en je wordt gespiest")
				alert("GAME OVER")
				alert("Reload de site om opnieuw te beginnen")
				}
			} 	
		else{
			alert("Je start de motor op en je rijdt weg")
			alert("15 minuten later sta je in bij een file en je kan er zo langs rijden met de motor")
			alert("LATER")
			alert("John: Ruim optijd, zo zie ik het graag")
			alert("Jij: Ben blij dat ik met de motor ben gegaan")
			alert("John: Okey, dan.")
			alert("John: Ik heb een kaart gevonde op zolder over een schat die hier verstopt is")
			alert("John: Maar de vraag is hoe gaan we naar binnen")
			alert("John: Ik heb rondgekeken en 2 ingangen gevonden")
			alert("John: De 1e ingang is de hoofdingang, ik heb camera's gezien maar ik weet niet of ze het nog doen")
			alert("John: De 2e ingang is de kelder, ik kon niet goed naar binnen kijken want het was best donker")
			var antwoord3 = prompt ("Jij mag kieze gaan we via de hoofdingang of via de kelder?")
	
			if (antwoord3 == "hoofdingang"){
				alert("Je gaat naar binnen")
				alert("Je kijkt rond en ziet dat de camera's gelukkig uit staan") 
				alert("Je loopt verder")
				alert("je ziet een paar opvallende stenen")
				alert("Je denkt erover na om de stenen uit teproberen net als in films")
				var antwoord4 = prompt("Ga je ze uitproberen Ja/Nee")

					if (antwoord4 == "ja"){
						alert("Je probeerd de stenen uit en John kijkt je raar aan")
						alert("Bij 1 van de stenen die je hebt uitgeprobeerd valt op de grond")
						alert("Er staan cijfers op een muur achter de plek waar de gevallen steen stond")
						alert("9742")
						alert("Je roept John")
						alert("Jij: Kijk er staan cijfers op de muur hier")
						alert("John: Wat zou dat moeten betekenen dan")
						alert("John: Schrijf het in je telefoon voor later. Misschien hebben we het nog nodig")
						alert("Je loopt verder")
						alert("Je komt 3 deuren tegen met plaatjes erop")
						alert("Op de 1e deur staat een plaatje van metalen spikes")
						alert("Op de 2e deur staat een plaatje van een valstrik")
						alert("op de 3e deur staat een plaatje van een leeuw")
						alert("John: Volgens de kaart komen alle gangen uit bij de zelfde gang waar we moeten zijn")
						alert("John: Kies jij welke gang we nemen")
							var antwoord5 = prompt("Welke deur neem je")
	
						if (antwoord5 == "1"){
							alert("Je loopt naar binnen")
							alert("2 grote metalen spikes vallen naar beneden en 1 raakt jou")
							alert("GAME OVER")
							alert("Reload de site om te restarte")
						}
						else if (antwoord5 == "2"){
							alert("Je loopt naar binnen")
							alert("Je loopt door de kamer en je stapt op een steen die ontploft")
							alert("GAME OVER")
							alert("Reload de site om te restarte")								
						}
						else if (antwoord5 == "3"){
							alert("Je loopt naar binnen")
							alert("Je loopt door de gang en je ziet om je heen allemaal dode leeuwen")
							alert("John: Deze leeuwen zijn hier al zolang zonder eten die zijn waarschijnlijk van de honger gestorven")
							alert("Je bent aan het einde van de kamer en gaat door de deur")
							alert("Je loopt in een andere gang met voor je een kluis met een code slot")
							alert("John: Een code? Ik heb geen code jij?")
							alert("Jij: Nee, zullen we maar wat proberen dan?")
							var antwoord6 = prompt("Vul een code in")

							if (antwoord6 == "9742"){
								alert("De deur gaat open en overal ligt goud")
								alert("John: We zijn rijk!")
								alert("John: We hoeven nooit meer te werken!")
								alert("John: Laten we dit vieren in de kroeg")
								alert("LATER")
								alert("Er staat een uitsmijter voor de deur")
								var antwoord7 = prompt ("Uitsmijter: Hoe oud ben je, en aub je id kaart laten zien")

								if (antwoord7 <=17){
									alert("Uitsmijter: Je mag er niet in. kom maar terug als je oud genoeg bent")
								}
								else{
									alert("Uitsmijter: Je mag naar binnen, fijne avond nog")
								}
							}
							else{
								alert("Er gebeurd niks en het schermpje knipperd rood")
								alert("Onder je gaat een luik open en je valt er doorheen")
								alert("Je valt tepletter op een een bed vol met metalen pinnen")
								alert("GAME OVER")
								alert("Reload de site om te restarte")
							}
						}
					}	
					else{
						alert("Je loopt verder")
						alert("Je komt 3 deuren tegen met plaatjes erop")
						alert("Op de 1e deur staat een plaatje van metalen spikes")
						alert("Op de 2e deur staat een plaatje van een valstrik")
						alert("Op de 3e deur staat een plaatje van een leeuw")
						alert("John: Volgens de kaart komen alle gangen uit bij de zelfde gang waar we moeten zijn")
						alert("John: Kies jij welke gang we nemen")
						var antwoord5 = prompt("Welke deur neem je")

						if (antwoord5 == "1"){
							alert("Je loopt naar binnen")
							alert("2 grote metalen spikes vallen naar beneden en 1 raakt jou")
							alert("GAME OVER")
							alert("Reload de site om te restarte")
						}
						else if (antwoord5 == "2"){
							alert("Je loopt naar binnen")
							alert("Je loopt door de kamer en je stapt op een steen die ontploft")
							alert("GAME OVER")
							alert("Reload de site om te restarte")								
						}
						else if (antwoord5 == "3"){
							alert("Je loopt naar binnen")
							alert("Je loopt door de gang en je ziet om je heen allemaal dode leeuwen")
							alert("John: Deze leeuwen zijn hier al zolang zonder eten die zijn waarschijnlijk van de honger gestorven")
							alert("Je bent aan het einde van de kamer en gaat door de deur")
							alert("Je loopt in een andere gang met voor je een kluis met een code slot")
							alert("John: Een code? Ik heb geen code jij?")
							alert("Jij: Nee, zullen we maar wat proberen dan?")
							var antwoord6 = prompt("Vul een code in")

							if (antwoord6 == "9742"){
								alert("De deur gaat open en overal ligt goud")
								alert("John: We zijn rijk!")
								alert("John: We hoeven nooit meer te werken!")
								alert("John: Laten we dit vieren in de kroeg")
								alert("LATER")
								alert("Er staat een uitsmijter voor de deur")
								var antwoord7 = prompt ("Uitsmijter: Hoe oud ben je, en aub je id kaart laten zien")

								if (antwoord7 <=17){
									alert("Uitsmijter: Je mag er niet in. kom maar terug als je oud genoeg bent")
								}
								else{
									alert("Uitsmijter: Je mag naar binnen, fijne avond nog")
								}
							}
							else{
								alert("Er gebeurd niks en het schermpje knipperd rood")
								alert("Onder je gaat een luik open en je valt er doorheen")
								alert("Je valt tepletter op een een bed vol met metalen pinnen")
								alert("GAME OVER")
								alert("Reload de site om te restarte")
							} 	
						}
					}
				}
				else{
					alert("Je gaat naar binnen via de kelder")
					alert("Er ligt een houde bodem in de kelder")
					alert("Je loopt over de houte bodem en als je in het midden bent vallen jij en john samen naar beneden")
					alert("op de bodem liggen metalen spikes en je wordt gespiest")
					alert("GAME OVER")
					alert("Reload de site om opnieuw te beginnen")
				}
			}